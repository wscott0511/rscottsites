import Image from 'next/image';
import ProfileImage from './20231006_161844.jpg';

export default function profileImage() {

    return <Image src={ProfileImage} width={200} height={250} alt='profile image' />
}