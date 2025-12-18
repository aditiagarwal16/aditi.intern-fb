/* eslint-disable no-redeclare */
// BEFORE — Overly Large Function

export function processOrder(order) {
  if (!order || !order.items || order.items.length === 0) {
    return { success: false, message: 'Invalid order' };
  }

  // Calculate total price
  let total = 0;
  order.items.forEach((item) => {
    if (!item.price || !item.quantity) {
      throw new Error('Invalid item data');
    }
    total += item.price * item.quantity;
  });

  // Apply discount
  let discount = 0;
  if (order.couponCode === 'WELCOME10') {
    discount = total * 0.1;
  } else if (order.couponCode === 'BIGSALE') {
    discount = total * 0.2;
  }

  const finalAmount = total - discount;

  // Prepare summary
  const summary = {
    totalItems: order.items.length,
    originalTotal: total,
    discountApplied: discount,
    finalAmount,
    message: 'Order processed successfully',
  };

  return summary;
}

// Why this function is BAD:

// Does validation, total calculation, discount logic, and response building all in one place

// Hard to test

// Hard to maintain

// Hard to extend (new coupons, new validation logic, etc.)

// AFTER — Smaller, Clear, Single-Purpose Functions

// function validateOrder(order) {
//   if (!order || !order.items || order.items.length === 0) {
//     return false;
//   }
//   return true;
// }

// function calculateTotal(order) {
//   return order.items.reduce((sum, item) => {
//     if (!item.price || !item.quantity) {
//       throw new Error('Invalid item data');
//     }
//     return sum + item.price * item.quantity;
//   }, 0);
// }

// function applyDiscount(total, couponCode) {
//   const discounts = {
//     WELCOME10: 0.1,
//     BIGSALE: 0.2,
//   };

//   const rate = discounts[couponCode] || 0;
//   return total * rate;
// }

// export function processOrder(order) {
//   if (!validateOrder(order)) {
//     return { success: false, message: 'Invalid order' };
//   }

//   const total = calculateTotal(order);
//   const discount = applyDiscount(total, order.couponCode);
//   const finalAmount = total - discount;

//   return {
//     totalItems: order.items.length,
//     originalTotal: total,
//     discountApplied: discount,
//     finalAmount,
//     message: 'Order processed successfully',
//   };
// }

// What improved?

// Each helper function does ONE thing only

// Easier to test

// Easier to extend (new coupons, new validation types)

// processOrder() now reads like a clear sequence of steps
