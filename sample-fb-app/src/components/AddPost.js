const AddPost = ({ handleAddPost }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddPost({
      content: e.target.content.value,
      title: e.target.title.value,
    })
  }

  return (
    <form className="add-post-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="add-post-form__field">
        <h4 className="add-post-form__label"> Title:  </h4>
        <input type="text" name="title" /> 
      </div>
      <div className="add-post-form__field">
        <h4 className="add-post-form__label"> Content: </h4>
        <textarea name="content" /> 
      </div>
      <button className="add-post-form__submit-btn" type="submit"> 
        Submit
      </button>
    </form>
  )
}


export default AddPost;