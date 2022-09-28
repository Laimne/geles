function Item({ data, modal }) {
    const showEdit = () => {
      modal(data);
    };
  
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.Spalva}</td>
        <td>{data.Aukstis}</td>
        <button className="btn btn-primary" onClick={showEdit}>
          Edit
        </button>
      </tr>
    );
  }
  
  export default Item;