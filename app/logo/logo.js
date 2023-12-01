import Image from 'next/image';
import rscottsiteslogo from './rscottsiteslogo.png';

export default function Logo() {

    return (
        <div>
            <a href='../'>
                <Image src={rscottsiteslogo} width={100} height={50} alt="RScott Sites Logo" />
            </a>
        </div>
    )
}