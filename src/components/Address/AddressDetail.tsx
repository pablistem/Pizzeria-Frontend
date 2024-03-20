import Modal from "../Modal/Modal"

const AddressDetail = ({ data, open }) => {
  return (
    <Modal open={open}>
      <div>{data.height}</div>
      <div>{data.street}</div>
    </Modal>
  )
}

export default AddressDetail;