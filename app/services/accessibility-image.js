import accessibilityImage from './accessibility.jpeg';
import Image from 'next/image';

export default function AccessibilityImage() {
    return <Image src={accessibilityImage} alt="accessibility" width={300} height={200} />
}