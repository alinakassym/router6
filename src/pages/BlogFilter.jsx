import { useState } from "react"

const BlogFilter = ({ postQuery, latest, setSearchParams }) => {
  const [search, setSearch] = useState(postQuery);
  const [checked, setChecked] = useState(latest);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;

    const query = form.search.value;
    const isLatest = form.latest.checked;

    const params = {}

    if (query.length) params.post = query;
    if (isLatest) params.latest = true;
    setSearchParams(params);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} style={{ marginBottom: "20px", display: "flex", flexDirection: "row", alignItems: "center" }}>
      <input type="search" name="search" value={search} onChange={e => setSearch(e.target.value)} />
      <input type="submit" value="Search" />

      <label style={{ marginLeft: "20px", display: "flex", alignItems: "center" }}>
        Latest:
        <input type="checkbox" name="latest" value={checked} onChange={e => setChecked(e.target.checked)} style={{ marginBottom: 2, marginLeft: 8 }} />
      </label>
    </form>
  )
}

export { BlogFilter }