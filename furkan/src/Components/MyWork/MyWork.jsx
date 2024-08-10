import React from "react";
import "./mywork.css";
import search from "../../assets/image-search.png";

function MyWork() {
  return (
    <div id="mywork" className="mywork">
      <div className="mywork_title">
        <h1>My latest work</h1>
        <img
          src="data:image/svg+xml,%3csvg%20width='227'%20height='72'%20viewBox='0%200%20227%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2061.1395C0%2055.1999%205.16729%2050.5816%2011.0696%2051.2459L187.039%2071.052C209.597%2073.591%20228.703%2054.5844%20226.282%2032.0133C223.76%208.50255%20199.379%20-6.00841%20177.511%202.98631L13.7433%2070.3471C7.19098%2073.0422%200%2068.2245%200%2061.1395Z'%20fill='url(%23paint0_linear_2160_23)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2160_23'%20x1='851.318'%20y1='47.553'%20x2='756.751'%20y2='339.402'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
          alt="theme"
        />
      </div>
      <div className="mywork_container">
        <a href="https://food-app-beta-azure.vercel.app/" target="blank">
          <img
            src="https://img.freepik.com/premium-psd/restaurant-food-menu-landing-page-web-ui-design-template_486734-353.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722988800&semt=ais_hybrid"
            alt="food"
          />
        </a>
        <a href="https://modern-interior-design.vercel.app/" target="blank">
          <img
            src="https://i.pinimg.com/originals/5e/47/e5/5e47e504a2807042af9b765ffe9d29a6.png"
            alt="furni"
          />
        </a>
        <a href="https://image-app-eight.vercel.app/" target="blank">
          <img src={search} alt="search" />
        </a>
        <a href="https://movie-five-theta.vercel.app/" target="blank">
          <img
            src="https://xdfile.com/wp-content/uploads/2020/04/cinema-website-template-for-xd-758x426.jpg"
            alt="movies"
          />
        </a>
        <a href="https://e-cartshopping.vercel.app/" target="blank">
          <img
            src="https://s.tmimgcdn.com/scr/800x500/351000/mekog-multi-vendor-ecommerce-website-template_351050-original.png"
            alt="food"
          />
        </a>
        <a href="https://food-app-beta-azure.vercel.app/" target="blank">
          <img
            src="https://img.freepik.com/premium-psd/restaurant-food-menu-landing-page-web-ui-design-template_486734-353.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722988800&semt=ais_hybrid"
            alt="food"
          />
        </a>
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img
          src="data:image/svg+xml,%3csvg%20width='33'%20height='24'%20viewBox='0%200%2033%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M32.0607%2013.0607C32.6464%2012.4749%2032.6464%2011.5251%2032.0607%2010.9393L22.5147%201.3934C21.9289%200.807611%2020.9792%200.807611%2020.3934%201.3934C19.8076%201.97919%2019.8076%202.92893%2020.3934%203.51472L28.8787%2012L20.3934%2020.4853C19.8076%2021.0711%2019.8076%2022.0208%2020.3934%2022.6066C20.9792%2023.1924%2021.9289%2023.1924%2022.5147%2022.6066L32.0607%2013.0607ZM0%2013.5H31V10.5H0V13.5Z'%20fill='white'/%3e%3c/svg%3e"
          alt="arrow"
        />
      </div>
    </div>
  );
}

export default MyWork;
