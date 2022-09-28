import { useEffect, useState } from "react";

function Modal({ showModal, hide, modalInputs, edit }) {
  const [inputs, setInputs] = useState({
    id: "",
    name: "",
    color: "",
    height: "",
  });

  const control = (e, what) => {
    const inputsCopy = { ...inputs };
    inputsCopy[what] = e.target.value;
    setInputs(inputsCopy);
  };

  useEffect(() => {
    setInputs({
      id: modalInputs.id,
      name: modalInputs.name,
      color: modalInputs.color,
      height: modalInputs.height,
    });
  }, [modalInputs]);

  const handleEdit = () => {
    edit(
      {
        id: inputs.id,
        name: inputs.name,
        color: inputs.color,
        height: inputs.height,
      },
      modalInputs.id
    );
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{
        display: showModal ? "block" : "none",
        opacity: showModal ? "1" : "0",
      }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit X
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hide}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label for="th1" className="col-form-label">
                  id
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="th1"
                  value={inputs.id}
                  onChange={(e) => control(e, "id")}
                  placeholder="Enter  id"
                />
              </div>
              <div className="form-group">
                <label for="th2" className="col-form-label">
                  name
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="th2"
                  value={inputs.name}
                  onChange={(e) => control(e, "name")}
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group">
                <label for="th3" className="col-form-label">
                  color
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="th3"
                  value={inputs.color}
                  onChange={(e) => control(e, "color")}
                  placeholder="Enter color"
                />
              </div>

              <div className="form-group">
                <label for="th4" className="col-form-label">
                  height
                </label>
                <input
                  className="form-control"
                  type="text"
                  height="th4"
                  value={inputs.height}
                  onChange={(e) => control(e, "height")}
                  placeholder="Enter height"
                />
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={hide}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleEdit}
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
