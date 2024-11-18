import React, { useState, useMemo } from "react";

const largeList = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

function MemoFilterList() {
    const [search, setSearch] = useState("");

    const filteredList = useMemo(() => {
        console.log("Filtering list...");
        return largeList.filter((item) => item.toLowerCase().includes(search.toLowerCase()));
    }, [search]);

    return (
        <div>
            <h1>Filter Large List</h1>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search items..."
            />
            <ul>
                {filteredList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default MemoFilterList;
