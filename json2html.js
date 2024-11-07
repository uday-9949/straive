export default function json2html(data) {
    const headers = ["Name", "Age", "Gender"];
    
    let table = `<table data-user="puliudaykiran1234@gmail.com">
      <thead>
        <tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr>
      </thead>
      <tbody>`;
  
    data.forEach(row => {
        table += `<tr>${headers.map(header => `<td>${row[header] || ''}</td>`).join('')}</tr>`;
    });
  
    table += `</tbody></table>`;
    return table;
}
