function formatToDollar(amount) {
    // Gunakan Intl.NumberFormat untuk format mata uang dolar
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  
    // Format dan kembalikan nilai
    return formatter.format(amount);
  }

  export  {formatToDollar};