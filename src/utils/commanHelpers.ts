export const createArrayOfSize = (size: number) => Array.from(Array(size).keys());

// Covert format of date from "MM/DD/YYYY" to "Month DD, YYYY"
export function formatDate(dateString: string): string {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    const [month, day, year] = dateString.split('/');
    const monthName = monthNames[parseInt(month) - 1];
  
    return `${monthName} ${parseInt(day)}, ${year}`;
}
  