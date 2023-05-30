const CompHead = () => {
    const iconoimg = 'costa_ballenabeachrun.png'
    return (
    <header>
        <nav className="navbar navbar-light max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="container mx-1">
                <a className="navbar-brand" href="#">
                    <img src={iconoimg} alt="costaballenabeachrun" width="1300" height="400" />
                </a>
            </div>
        </nav>
    </header>)
}

export default CompHead