import { useState } from "react";

export const Register = () => {
    const [user, setUser] = useState({
        title: "",
        company: "",
        category: "",
        price: "",
        discount: "",
        image: "",
        description: "",
        stock: "",
        
    });

    // handling the input value
    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
    
        setUser({
          ...user,
          [name]: value,
        });
      };    

      // handle form on submit
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(user);
      try {
        const response = await fetch('http://localhost:7000/api/auth/products', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
      });
      console.log(response);

      } catch (error) {
        console.log("register", error);

      }
    };


    return (
        <>
        <section>
          <main>
            <div className="section-registration">
              <div className="container grid grid-two-cols">
                <div className="registration-image reg-img">
                  <img
                    src="/images/register.png"
                    alt=" a cute look"
                    width="400"
                    height="500"
                  />
                </div>
                {/* our main registration code  */}
                <div className="registration-form">
                  <h1 className="main-heading mb-3">registration form</h1>
                  <br />
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        name="title"
                        value={user.title}
                        onChange={handleInput}
                        placeholder="title"
                      />
                    </div>
                    <div>
                      <label htmlFor="company">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={user.company}
                        onChange={handleInput}
                        placeholder="company"
                      />
                    </div>
                    <div>
                      <label htmlFor="category">Category</label>
                      <input
                        type="text"
                        name="category"
                        value={user.category}
                        onChange={handleInput}
                        placeholder="category"
                      />
                    </div>
                    <div>
                      <label htmlFor="price">Price</label>
                      <input
                        type="number"
                        name="price"
                        value={user.price}
                        onChange={handleInput}
                        placeholder="price"
                      />
                    </div>
                    <div>
                      <label htmlFor="discount">Discount</label>
                      <input
                        type="number"
                        name="discount"
                        value={user.discount}
                        onChange={handleInput}
                        placeholder="discount"
                      />
                    </div>
                    <div>
                      <label htmlFor="image">Image</label>
                      <input
                        type="text"
                        name="image"
                        value={user.image}
                        onChange={handleInput}
                        placeholder="image"
                      />
                    </div>
                    <div>
                      <label htmlFor="description">Description</label>
                      <input
                        type="text"
                        name="description"
                        value={user.description}
                        onChange={handleInput}
                        placeholder="description"
                      />
                    </div>
                    <div>
                      <label htmlFor="stock">Stock</label>
                      <input
                        type="number"
                        name="stock"
                        value={user.stock}
                        onChange={handleInput}
                        placeholder="stock"
                      />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-submit">
                      Register Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </section>
      </>
    )
};