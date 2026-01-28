import React, { useEffect, useState } from "react";

function DatasetForm() {
    const [datasets, setDatasets] = useState([]);

    // useEffect(() => {
    //   fetch("http://localhost:4000/api/superset/dataset", {
    //     credentials: "include",
    //   })
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log("API response:", data);
    //       setDatasets(data);
    //     })
    //     .catch(console.error);
    // }, []);

    useEffect(() => {
        fetch("http://localhost:4000/api/superset/dataset", {
            credentials: "include",
        })
            .then(res => res.json())
            .then(data => {
                console.log("Raw API response:", data); // see what comes back
                const mapped = (data.result || []).map(ds => ({
                    id: ds.id,
                    label: ds.dataset_name, // or table_name
                }));
                console.log("Mapped datasets:", mapped);
                setDatasets(mapped);
            })
            .catch(console.error);
    }, []);


    return (
        <form action="/api/submit" method="POST">
            <select name="datasetId" required>
                <option value="">Select a dataset</option>

                {datasets.map(ds => (
                    <option key={ds.id} value={ds.id}>
                        {ds.label}
                    </option>
                ))}
            </select>

            <br /><br />

            <button type="submit">Submit</button>
        </form>
    );
}

export default DatasetForm;
