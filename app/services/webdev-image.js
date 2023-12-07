import Image from 'next/image'
import codeimage from './coding.jpeg'

export default function WebDevImage() {

    return <Image src={codeimage} alt="web developer" width={300} height={200} />
}