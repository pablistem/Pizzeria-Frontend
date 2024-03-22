import Modal from "../Modal/Modal"

const AddressDetail = ({ data, open }) => {
  return (
    <Modal open={open}>
      <div>{data.country}</div>
      <div>{data.state}</div>
      <div>{data.city}</div>
      <div>{data.street}</div>
      <div>{data.height}</div>
      <div>{data.postalCode}</div>
    </Modal>
  )
}

export default AddressDetail;