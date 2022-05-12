import pdf from '../assets/menu/menu.pdf';
import { FaFileDownload } from "react-icons/fa";

import './DownloadMenu.css'

function DownloadMenu() {
  return (
    <div className = "downMenu">
        <a className='downloadBtn' href = {pdf} target = "_blank" download>
            {'Meni'}
            <FaFileDownload size={'2rem'} />
        </a>
    </div>
  )
}

export default DownloadMenu