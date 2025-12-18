import { useFormik } from 'formik';
import * as Yup from 'yup';

function FormikForm() {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Name is too short')
        .required('Name is required'),

      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    }),

    onSubmit: (values) => {
      console.log('Form Submitted:', values);
      alert('Form submitted successfully!');
    },
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow rounded bg-white">
      <h2 className="text-xl font-semibold mb-4 text-center">Formik Form</h2>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border p-2 rounded"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-600 text-sm">{formik.errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border p-2 rounded"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-600 text-sm">{formik.errors.email}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormikForm;
