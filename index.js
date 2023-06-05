async function fetchData() {
    const res = await fetch("https://api.coronavirus.data.gov.uk/v1/data");
    const record = await res.json();
    document.getElementById("date").innerHTML = record.data[0].date;
    document.getElementById("country").innerHTML = record.data[0].areaName;
    document.getElementById("latest").innerHTML = record.data[0].latestBy;
    document.getElementById("death").innerHTML = record.data[0].deathNew;
}
fetchData();