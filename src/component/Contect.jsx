import { useState } from 'react';
import axios from 'axios';
import '../Css/contect.css';
import { toast } from 'react-toastify';

function Contect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    questionAbout: '',
    message: '',
    productType: '',
    metalType: '',
    sizeLength: '',
    stone: '',
    findUs: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://naieldjewel.onrender.com/contact', formData);
      toast.success("Contact Submited Successfully!");
      setFormData({
        name: '',
        email: '',
        subject: '',
        questionAbout: '',
        message: '',
        productType: '',
        metalType: '',
        sizeLength: '',
        stone: '',
        findUs: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Something went wrong. Please try again!");
    }
  };

  return (
    <>
      <div className="container">
        <div className='contect-full-text'>
          <h1>How Can We Help?</h1>
        </div>

        <div className="contect-container">
          <div className='contect-image'>
            {/* <img
              src="https://i.pinimg.com/736x/e3/2f/50/e32f50dc246a8439ce7a8c0165e3e24b.jpg"
              alt="Contact Us"
              className=""
            /> */}
            <video src="" className='w-100' controls autoPlay style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block"
            }}>
              <source src="https://v1.pinimg.com/videos/iht/720p/e1/ef/72/e1ef72e60b230ba6c7a71cb705687f56.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />

              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />

              <label>Subject:</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />

              <label>Question is about:</label>
              <select name="questionAbout" value={formData.questionAbout} onChange={handleChange} required>
                <option>Please select</option>
                <option>My Order</option>
                <option>Cancel Order</option>
                <option>Return</option>
                <option>Shipping</option>
                <option>Product Information</option>
                <option>Damage/Wrong</option>
                <option>Custom Order</option>
                <option>Another Order</option>
              </select>

              <label>How can we help you?</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Please write your question. A support staff member will respond to you as soon as possible."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <div className="file-upload">
                <label>Attachments</label>
                <div className="file-box">
                  <input type="file" accept=".jpg,.pdf" />
                </div>
                <small>(Acceptable file types .jpg, pdf.)</small>
              </div>

              <label>Product Type:</label>
              <select name="productType" value={formData.productType} onChange={handleChange} required>
                <option>Please select</option>
                <option>Ring</option>
                <option>Necklace</option>
                <option>Earring</option>
                <option>Bracelet</option>
              </select>

              <label>Metal Type:</label>
              <select name="metalType" value={formData.metalType} onChange={handleChange} required>
                <option>Please select</option>
                <option>925 Silver</option>
                <option>14K Rose Gold</option>
                <option>14K White Gold</option>
                <option>14K Yellow Gold</option>
                <option>18K Rose Gold</option>
                <option>18K White Gold</option>
                <option>18K Yellow Gold</option>
                <option>950 Platinum</option>
              </select>

              <label>Size/Length:</label>
              <input type="text" name="sizeLength" value={formData.sizeLength} onChange={handleChange} />

              <label>Stone:</label>
              <input type="text" name="stone" value={formData.stone} onChange={handleChange} />

              <label>How did you find us:</label>
              <input type="text" name="findUs" value={formData.findUs} onChange={handleChange} />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contect;
