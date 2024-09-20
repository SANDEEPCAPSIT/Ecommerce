export const Home = () => {
    return (
        <>
            <main>
                <section>
                    <div className="">
                        <p>We are the Best Shoping Company</p>
                        <h1>Welcome to Amazon</h1>
                        <p>
                            What Do You call Purchasing Electronic Items at the best price ?
                        </p>
                    </div>
                     <div className="btn-group">
                            <a href="/register">
                               <button className="btn"> Register</button>
                            </a>
                            <a href="/login">
                               <button className="btn"> Login</button>
                            </a>
                        </div>
                </section>
            </main>
        </>
    );
};