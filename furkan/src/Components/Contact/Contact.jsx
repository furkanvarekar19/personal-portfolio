import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img
          src="data:image/svg+xml,%3csvg%20width='227'%20height='72'%20viewBox='0%200%20227%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2061.1395C0%2055.1999%205.16729%2050.5816%2011.0696%2051.2459L187.039%2071.052C209.597%2073.591%20228.703%2054.5844%20226.282%2032.0133C223.76%208.50255%20199.379%20-6.00841%20177.511%202.98631L13.7433%2070.3471C7.19098%2073.0422%200%2068.2245%200%2061.1395Z'%20fill='url(%23paint0_linear_2160_23)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2160_23'%20x1='851.318'%20y1='47.553'%20x2='756.751'%20y2='339.402'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
          alt="theme"
        />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img
                src="data:image/svg+xml,%3csvg%20width='38'%20height='28'%20viewBox='0%200%2038%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M31.9853%200H5.15656C2.30882%200%200%202.30882%200%205.15656V22.1304C0%2024.9781%202.30882%2027.287%205.15656%2027.287H31.9853C34.833%2027.287%2037.1419%2024.9781%2037.1419%2022.1304V5.15656C37.1419%202.30882%2034.833%200%2031.9853%200ZM12.9247%2018.411L5.70375%2024.5713C5.19442%2025.006%204.42873%2024.9456%203.99413%2024.4357C3.55945%2023.9264%203.61988%2023.1607%204.12979%2022.7261L11.3507%2016.5658C11.8599%2016.1311%2012.6256%2016.1915%2013.0602%2016.7014C13.4949%2017.2107%2013.4345%2017.9764%2012.9247%2018.411ZM18.5709%2016.069C17.6051%2016.0666%2016.6689%2015.7457%2015.9369%2015.1127L15.9375%2015.1133L15.9352%2015.1115C15.9358%2015.1121%2015.9364%2015.1121%2015.9369%2015.1127L4.85761%205.49649C4.35126%205.05703%204.29736%204.29141%204.73617%203.78572C5.17556%203.27937%205.94125%203.22547%206.44687%203.66428L17.5293%2013.2829C17.7662%2013.4937%2018.1564%2013.6459%2018.5709%2013.6435C18.9849%2013.6447%2019.3685%2013.4967%2019.6185%2013.2787L19.6238%2013.274L30.6949%203.66435C31.2006%203.22554%2031.9663%203.27944%2032.4057%203.78579C32.8445%204.29141%2032.7906%205.0571%2032.2843%205.49656L21.2019%2015.1157C20.4724%2015.7421%2019.5374%2016.0678%2018.5709%2016.069ZM33.1483%2024.4357C32.7136%2024.9456%2031.9479%2025.006%2031.4387%2024.5713L24.2178%2018.411C23.708%2017.9763%2023.6476%2017.2107%2024.0822%2016.7014C24.5168%2016.1915%2025.2825%2016.1312%2025.7918%2016.5658L33.0127%2022.7261C33.5225%2023.1607%2033.5829%2023.9264%2033.1483%2024.4357Z'%20fill='%23D8D8D8'/%3e%3c/svg%3e"
                alt="email"
              />
              <p>furkanvarekar51@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img
                src="data:image/svg+xml,%3csvg%20width='32'%20height='33'%20viewBox='0%200%2032%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.3519%2021.5541L19.6136%2022.3313C19.6136%2022.3313%2017.8588%2024.1788%2013.0692%2019.1361C8.27955%2014.0935%2010.0343%2012.2461%2010.0343%2012.2461L10.4992%2011.7567C11.6444%2010.551%2011.7524%208.61524%2010.7532%207.20206L8.7093%204.31127C7.47262%202.56218%205.08295%202.33112%203.66549%203.82344L1.12139%206.50191C0.418552%207.24186%20-0.0524378%208.20107%200.00468137%209.26515C0.150802%2011.9874%201.31405%2017.8445%207.80503%2024.6783C14.6884%2031.9252%2021.147%2032.2132%2023.7882%2031.9526C24.6236%2031.8701%2025.3501%2031.4197%2025.9356%2030.8032L28.2382%2028.3791C29.7924%2026.7428%2029.3541%2023.9376%2027.3655%2022.793L24.2688%2021.0105C22.9631%2020.2589%2021.3723%2020.4797%2020.3519%2021.5541Z'%20fill='%23D8D8D8'/%3e%3cpath%20d='M16.6306%201.02087C16.7379%200.358117%2017.3644%20-0.091461%2018.0271%200.0158238C18.0682%200.023685%2018.2003%200.0483545%2018.2693%200.0637527C18.4077%200.0945652%2018.6006%200.141975%2018.8411%200.212045C19.3222%200.352153%2019.9942%200.582979%2020.8008%200.952747C22.4156%201.69309%2024.5646%202.98816%2026.7945%205.21814C29.0245%207.44812%2030.3196%209.59707%2031.0598%2011.2119C31.4297%2012.0185%2031.6605%2012.6905%2031.8006%2013.1715C31.8706%2013.4121%2031.9181%2013.605%2031.9489%2013.7433C31.9643%2013.8125%2031.9756%2013.868%2031.9834%2013.909L31.9928%2013.9596C32.0999%2014.6223%2031.6545%2015.2748%2030.9918%2015.3821C30.3309%2015.4891%2029.7084%2015.0416%2029.5985%2014.3821C29.5951%2014.3642%2029.5857%2014.3167%2029.5758%2014.2718C29.5557%2014.1821%2029.5212%2014.0397%2029.4664%2013.8514C29.3566%2013.4749%2029.1662%2012.9151%2028.8498%2012.2252C28.218%2010.8469%2027.0818%208.94374%2025.0753%206.93732C23.069%204.93092%2021.1658%203.79472%2019.7876%203.16286C19.0976%202.84653%2018.5379%202.65603%2018.1612%202.54633C17.973%202.49149%2017.7364%202.43718%2017.6466%202.41719C16.9869%202.30725%2016.5236%201.68173%2016.6306%201.02087Z'%20fill='%23D8D8D8'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16.9963%206.6115C17.1807%205.96594%2017.8536%205.59214%2018.4991%205.77658L18.1652%206.94546C18.4991%205.77658%2018.4991%205.77658%2018.4991%205.77658L18.5016%205.77726L18.504%205.77797L18.5094%205.77954L18.522%205.7833L18.5541%205.79329C18.5784%205.8011%2018.609%205.81128%2018.6453%205.8242C18.7181%205.85003%2018.8144%205.88676%2018.9324%205.93733C19.1686%206.03854%2019.4911%206.19482%2019.8876%206.42938C20.6808%206.89891%2021.7639%207.67883%2023.0363%208.95116C24.3086%2010.2235%2025.0884%2011.3065%2025.558%2012.0999C25.7925%2012.4962%2025.9488%2012.8189%2026.0501%2013.055C26.1007%2013.173%2026.1375%2013.2692%2026.1632%2013.342C26.1762%2013.3784%2026.1862%2013.4089%2026.1942%2013.4334L26.2041%2013.4654L26.2078%2013.478L26.2094%2013.4834L26.2101%2013.4859C26.2101%2013.4859%2026.2109%2013.4882%2025.0419%2013.8222L26.2109%2013.4882C26.3953%2014.1338%2026.0214%2014.8066%2025.376%2014.991C24.7359%2015.1739%2024.0689%2014.808%2023.8778%2014.1725L23.8718%2014.1551C23.8632%2014.1307%2023.8454%2014.0828%2023.8154%2014.0127C23.7554%2013.8728%2023.6467%2013.6439%2023.4658%2013.3382C23.1043%2012.7276%2022.4516%2011.8049%2021.317%2010.6703C20.1826%209.53582%2019.2598%208.8831%2018.6492%208.5217C18.3435%208.34078%2018.1147%208.23202%2017.9746%208.17205C17.9046%208.14204%2017.8566%208.12415%2017.8323%208.11551L17.8148%208.10953C17.1794%207.91846%2016.8134%207.25156%2016.9963%206.6115Z'%20fill='%23D8D8D8'/%3e%3c/svg%3e"
                alt="call"
              />
              <p>+772-825-524</p>
            </div>
            <div className="contact-detail">
              <img
                src="data:image/svg+xml,%3csvg%20width='27'%20height='37'%20viewBox='0%200%2027%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.494%200C6.05469%200%203.19006e-06%206.0571%200%2013.4964C-4.66239e-06%2026.5864%2012.7344%2036.5376%2012.7344%2036.5376C13.1817%2036.8939%2013.8159%2036.8939%2014.2632%2036.5376C14.2632%2036.5376%2027%2026.5864%2027%2013.4964C27%206.0571%2020.9333%200%2013.494%200ZM13.494%207.36407C16.8676%207.36407%2019.6359%2010.1228%2019.6359%2013.4964C19.636%2016.87%2016.8676%2019.6359%2013.494%2019.6359C10.1204%2019.6359%207.36166%2016.87%207.36168%2013.4964C7.36169%2010.1228%2010.1204%207.36407%2013.494%207.36407Z'%20fill='%23D8D8D8'/%3e%3c/svg%3e"
                alt="location"
              />
              <p>Mumbai</p>
            </div>
          </div>
        </div>
        <form  className="conttact-right">
       <label htmlFor="">Your Name</label>
       <input type="text" name="name"  placeholder="Enter your name"/>
       <label htmlFor="">Your Email</label>
       <input type="email" name="email"  placeholder="Enter your email"/>
       <label htmlFor="">Write your message here</label>
      <textarea name="message" rows='8'></textarea>
      <button className="contact-submit" type="submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
