import {BrowserRouter, Link} from "react-router-dom";

function Navbar(){
    return  <section>
    {/* logo */}
    <div class="nav">
          <div class="container-fluid">
              <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                  <Link to="#" class="navbar-brand">MENU</Link>
                  <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                      <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                      <div class="navbar-nav mr-auto">
                          <Link to="/" class="nav-item nav-link active">Home</Link>
                          <Link to="product-list.html" class="nav-item nav-link">Products</Link>
                          <Link to="product-detail.html" class="nav-item nav-link">Product Detail</Link>
                          <Link to="cart.html" class="nav-item nav-link">Cart</Link>
                          <Link to="checkout.html" class="nav-item nav-link">Checkout</Link>
                          <Link to="my-account.html" class="nav-item nav-link">My Account</Link>
                          <div class="nav-item dropdown">
                              <Link to="#" class="nav-link dropdown-toggle" data-toggle="dropdown">More Pages</Link>
                              <div class="dropdown-menu">
                                  <Link to="wishlist.html" class="dropdown-item">Wishlist</Link>
                                  <Link to="login.html" class="dropdown-item">Login & Register</Link>
                                  <Link to="contact.html" class="dropdown-item">Contact Us</Link>
                              </div>
                          </div>
                      </div>
                      <div class="navbar-nav ml-auto">
                      <div class="dropdown">
<Link class="btn  dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  Account
</Link>

<ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">
<Link to="#" class="dropdown-item">Login</Link>
<Link to="/signup" class="dropdown-item">Register</Link>
</ul>
</div>
                      </div>
                  </div>
              </nav>
          </div>
      </div>
  </section>
}
export default Navbar