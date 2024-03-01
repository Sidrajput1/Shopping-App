import "./Layout.css";
function Layout({children}){

    return(
        <div className="main-container">
            <nav className='navabar'>
                <img src="https://t4.ftcdn.net/jpg/05/18/88/05/360_F_518880541_wQhxFflsVudaRSwg9tFEVwnysEJ2naZ5.jpg" alt="logo" />
                <ul className='unorder'>

                    <li>
                        HOME
                    </li>
                    <li>CONTACT</li>
                    <li>ABOUT</li>
                    <li>MENU</li>

                </ul>
                

                <button className='login'>LogIn</button>

            </nav>
            

            {children}

        </div>
        
    )
    
}

export default Layout;