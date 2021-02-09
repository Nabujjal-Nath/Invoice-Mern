function Header() {
    return (
        <div>
        <div className="container" style={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
            <div style={{textAlign:'left'}}>
                <h3>Raven Technolabs</h3>
                <br/>
                <p>Office-802, Rajhans Tower,</p>
                <p>B/H Shreyash Trade Center,</p>
                <p>Varachha Road,Surat-395006</p>
                <br/>
                <p>+91 8469536960</p>
                <p>raventechnoloabs@gmail.com</p>
            </div>
            <div style={{textAlign:"right"}}>
                <h1>INVOICE</h1>
                <br/>
                <p>25-October-2020</p>
                <p> Invoice #1</p>
                <br/>
                <h4>Att:Himal Jani</h4>
                <h4>Saurastra Express</h4>
            </div>     
        </div>
          <div className="gap">
            <hr/> 
         </div>
        </div>
    )

}
export default Header;