import styles from './styles.module.scss'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation';

export function CategoryChoose(){
    const params = useParams();
    const router = useRouter();

    return(
        <ul className={styles.categories}>
                <li className={params.slug == 'laptops' ? styles.selectedCategory : styles.category} onClick={(e) => {
                    if(e.target.className.includes('category')) router.push('/store/laptops') }}
                > 
                    <p className={params.slug == 'laptops' ? styles.selectedCategoryName : styles.categoryName}>Laptops</p>
                    <Image
                        onClick={(e) => { if(e.target.className.includes('selectedCross')) router.push('/store') }} 
                        src='/icons/close-cross.svg' 
                        width={24} 
                        height={24} 
                        className={params.slug == 'laptops' ? styles.selectedCross : styles.cross} 
                        alt='cross'
                    />
                </li>
                
                <li className={params.slug == 'keyboards' ? styles.selectedCategory : styles.category} onClick={(e) => {
                    if(e.target.className.includes('category')) router.push('/store/keyboards') }}
                > 
                    <p className={params.slug == 'keyboards' ? styles.selectedCategoryName : styles.categoryName}>Keyboards</p>
                    <Image
                        onClick={(e) => { if(e.target.className.includes('selectedCross')) router.push('/store') }} 
                        src='/icons/close-cross.svg' 
                        width={24} 
                        height={24} 
                        className={params.slug == 'keyboards' ? styles.selectedCross : styles.cross} 
                        alt='cross'
                    />
                </li>

                <li className={params.slug == 'mice' ? styles.selectedCategory : styles.category} onClick={(e) => {
                    if(e.target.className.includes('category')) router.push('/store/mice') }}
                > 
                    <p className={params.slug == 'mice' ? styles.selectedCategoryName : styles.categoryName}>Mice</p>
                    <Image
                        onClick={(e) => { if(e.target.className.includes('selectedCross')) router.push('/store') }} 
                        src='/icons/close-cross.svg' 
                        width={24} 
                        height={24} 
                        className={params.slug == 'mice' ? styles.selectedCross : styles.cross} 
                        alt='cross'
                    />
                </li>

                <li className={params.slug == 'audio' ? styles.selectedCategory : styles.category} onClick={(e) => {
                    if(e.target.className.includes('category')) router.push('/store/audio') }}
                > 
                    <p className={params.slug == 'audio' ? styles.selectedCategoryName : styles.categoryName}>Audio</p>
                    <Image
                        onClick={(e) => { if(e.target.className.includes('selectedCross')) router.push('/store') }} 
                        src='/icons/close-cross.svg' 
                        width={24} 
                        height={24} 
                        className={params.slug == 'audio' ? styles.selectedCross : styles.cross} 
                        alt='cross'
                    />
                </li>

                <li className={params.slug == 'components' ? styles.selectedCategory : styles.category} onClick={(e) => {
                    if(e.target.className.includes('category')) router.push('/store/components') }}
                > 
                    <p className={params.slug == 'components' ? styles.selectedCategoryName : styles.categoryName}>Components</p>
                    <Image
                        onClick={(e) => { if(e.target.className.includes('selectedCross')) router.push('/store') }} 
                        src='/icons/close-cross.svg' 
                        width={24} 
                        height={24} 
                        className={params.slug == 'components' ? styles.selectedCross : styles.cross} 
                        alt='cross'
                    />
                </li>

                <li className={params.slug == 'chairs' ? styles.selectedCategory : styles.category} onClick={(e) => {
                    if(e.target.className.includes('category')) router.push('/store/chairs') }}
                > 
                    <p className={params.slug == 'chairs' ? styles.selectedCategoryName : styles.categoryName}>Chairs</p>
                    <Image
                        onClick={(e) => { if(e.target.className.includes('selectedCross')) router.push('/store') }} 
                        src='/icons/close-cross.svg' 
                        width={24} 
                        height={24} 
                        className={params.slug == 'chairs' ? styles.selectedCross : styles.cross} 
                        alt='cross'
                    />
                </li>

                <li className={params.slug == 'streaming' ? styles.selectedCategory : styles.category} onClick={(e) => {
                    if(e.target.className.includes('category')) router.push('/store/streaming') }}
                > 
                    <p className={params.slug == 'streaming' ? styles.selectedCategoryName : styles.categoryName}>Streaming</p>
                    <Image
                        onClick={(e) => { if(e.target.className.includes('selectedCross')) router.push('/store') }} 
                        src='/icons/close-cross.svg' 
                        width={24} 
                        height={24} 
                        className={params.slug == 'streaming' ? styles.selectedCross : styles.cross} 
                        alt='cross'
                    />
                </li>

                <li className={params.slug == 'console' ? styles.selectedCategory : styles.category} onClick={(e) => {
                    if(e.target.className.includes('category')) router.push('/store/console') }}
                > 
                    <p className={params.slug == 'console' ? styles.selectedCategoryName : styles.categoryName}>Console</p>
                    <Image
                        onClick={(e) => { if(e.target.className.includes('selectedCross')) router.push('/store') }} 
                        src='/icons/close-cross.svg' 
                        width={24} 
                        height={24} 
                        className={params.slug == 'console' ? styles.selectedCross : styles.cross} 
                        alt='cross'
                    />
                </li>

                <li className={params.slug == 'mobile' ? styles.selectedCategory : styles.category} onClick={(e) => {
                    if(e.target.className.includes('category')) router.push('/store/mobile') }}
                > 
                    <p className={params.slug == 'mobile' ? styles.selectedCategoryName : styles.categoryName}>Mobile</p>
                    <Image
                        onClick={(e) => { if(e.target.className.includes('selectedCross')) router.push('/store') }} 
                        src='/icons/close-cross.svg' 
                        width={24} 
                        height={24} 
                        className={params.slug == 'mobile' ? styles.selectedCross : styles.cross} 
                        alt='cross'
                    />
                </li>

                <li className={params.slug == 'gear' ? styles.selectedCategory : styles.category} onClick={(e) => {
                    if(e.target.className.includes('category')) router.push('/store/gear') }}
                > 
                    <p className={params.slug == 'gear' ? styles.selectedCategoryName : styles.categoryName}>Gear</p>
                    <Image
                        onClick={(e) => { if(e.target.className.includes('selectedCross')) router.push('/store') }} 
                        src='/icons/close-cross.svg' 
                        width={24} 
                        height={24} 
                        className={params.slug == 'gear' ? styles.selectedCross : styles.cross} 
                        alt='cross'
                    />
                </li>
        </ul>
    );
}