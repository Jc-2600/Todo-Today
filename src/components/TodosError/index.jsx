import "./TodosError.css"

export function TodosError() {
    return (
        <div>
            <svg height="80px" width="80px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                <path  className="error-path1" d="M0,256c0,141.384,114.615,256,256,256l22.261-256L256,0C114.615,0,0,114.615,0,256z" />
                <path className="error-path2" d="M256,0v512c141.384,0,256-114.616,256-256S397.384,0,256,0z" />
                <polygon className="error-path3" points="161.555,114.333 114.333,161.555 208.778,256 114.333,350.445 161.555,397.667 256,303.222 
	            278.261,256 256,208.778 "/>
                <polygon className="error-path4" points="397.667,161.555 350.445,114.333 256,208.778 256,303.222 350.445,397.667 397.667,350.445 
	            303.222,256 "/>
            </svg>
            <p className="loading-msg">¡Ups! Hubo un error</p>
        </div>
    )
}