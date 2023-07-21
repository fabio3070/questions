// Get the current date
export const getDateByText = (date) => {
    const newDate = new Date(date);
    
    // Get the day, month, and year from the Date object
    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1
    const year = newDate.getFullYear();
    
    // Format the date in "dd/mm/yyyy" format
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
}
