import "./createRecruitNews.scss"
import React, { useContext, useState } from 'react'
import { GlobalState } from '../../../GlobalState'
import Loading from '../../utils/loading/Loading'

const initialState = {
    recruitNews_id: '',
    title: '',
    price: 0,
    description: '',
    content: '',
    category: '',
    _id: ''
}

const CreateRecruitNews = () => {
    const state = useContext(GlobalState)
    const [recruitNews, setRecruitNews] = useState(initialState)
    const [categories] = state.categoriesAPI.categories
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)

    return (
        <div className="create_recruitNews">
            <div className="upload">
                <input type="file" name="file" id="file_up"  />
                {
                    loading ? <div id="file_img"><Loading /></div>

                        : <div id="file_img" >
                            <img src="https://mdissingapore.com/wp-content/uploads/2017/11/cong-nghe-thong-tin.jpg" alt="" />
                            <span >X</span>
                        </div>
                }

            </div>
            <form >
                <div className="row">
                    <label htmlFor="product_id">RecruitNews ID</label>
                    <input type="text" name="product_id" id="product_id" required
                        value={recruitNews.recruitNews_id}  />
                </div>

                <div className="row">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" required
                        value={recruitNews.title}  />
                </div>

                <div className="row">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" required
                        value={recruitNews.price}  />
                </div>

                <div className="row">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description" id="description" required
                        value={recruitNews.description} rows="5"  />
                </div>

                <div className="row">
                    <label htmlFor="content">Content</label>
                    <textarea type="text" name="content" id="content" required
                        value={recruitNews.content} rows="7"  />
                </div>

                <div className="row">
                    <label htmlFor="categories">Categories: </label>
                    <select name="category" value={recruitNews.category} >
                        <option value="">Please select a category</option>
                        {
                            categories.map(category => (
                                <option value={category._id} key={category._id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default CreateRecruitNews