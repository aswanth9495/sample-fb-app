const AddPost = ({ addComment, forItem, forId, placeholder }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment({
      comment: e.target.comment.value,
      forItem: forItem,
      forId: forId,
    })
  }

  return (
    <form className="add-comment-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="add-comment-form__field">
        <textarea name="comment" placeholder={placeholder} /> 
      </div>
      <button className="add-comment-form__submit-btn" type="submit"> 
        Add comment
      </button>
    </form>
  )
}


export default AddPost;