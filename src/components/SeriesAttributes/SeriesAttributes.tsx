import styles from "./series-attributes.module.scss";
import { SeriesAttributeList } from "../../interfaces/SeriesAttributeList";


export const SeriesAttributes = ({ thickness, sound_absorption, safety_rating, guarantee, locking_points, lock }: SeriesAttributeList) => {
    return (
        <div className={styles.grid}>
            <div className={styles.attribute}>
                <div className={styles.attribute_bage} style={{ borderColor: thickness.colour }}><span>{thickness.value}</span>мм</div>
                <span>Толщина стали</span>
            </div>
            <div className={styles.attribute}>
                <div className={styles.attribute_bage} style={{ borderColor: guarantee.colour }}><span>{guarantee.value}</span>лет</div>
                <span>Гарантия<br /><bdi>{guarantee.description}</bdi></span>
            </div>
            <div className={styles.attribute}>
                <div className={styles.attribute_bage} style={{ borderColor: sound_absorption.colour }}><span>{sound_absorption.value}</span>дБ</div>
                <span>Шумоизоляция</span>
            </div>
            <div className={styles.attribute}>
                <div className={styles.attribute_bage} style={{ borderColor: locking_points.colour }}><span>{locking_points.value}</span></div>
                <span>Точек запирания</span>
            </div>
            <div className={styles.attribute}>
                <div className={styles.attribute_bage} style={{ borderColor: safety_rating.colour }}><span>{safety_rating.value}</span></div>
                <span>Рейтинг безопасности<br /><bdi>{safety_rating.status}</bdi></span>
            </div>
            <div className={`${styles.attribute} ${styles.attribute_last}`}>
                <div className={styles.attribute_bage} style={{ borderColor: lock.colour }}>
                    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2275 9.47217V30.8735C11.2188 31.4945 10.7253 31.9949 10.1175 32H1.13396C0.833836 32 0.546276 31.8756 0.337802 31.6549C0.125579 31.4496 0.00376122 31.1648 0 30.8659V1.13286V1.13415C0.00376732 0.835212 0.125576 0.550405 0.337802 0.345128C0.548768 0.128303 0.833833 0.00512372 1.13396 0H10.1175C10.4138 0.00384903 10.6964 0.128297 10.9023 0.345128C11.1145 0.550405 11.2364 0.835231 11.2414 1.13415V5.62857H18.1681C18.6742 5.62728 19.1614 5.83128 19.5218 6.19566C19.8759 6.54847 20.0756 7.03345 20.0769 7.54024C20.0794 8.06112 19.8747 8.5615 19.508 8.92328C19.1464 9.28381 18.6604 9.48393 18.1543 9.48009L11.2275 9.47217ZM19.3823 25.0092C19.803 25.0117 20.2073 25.1798 20.51 25.48C20.8038 25.779 20.9696 26.1857 20.9696 26.6103C20.9696 27.035 20.8038 27.4417 20.51 27.7407C19.8834 28.3667 18.8825 28.3667 18.2559 27.7407C17.9608 27.4417 17.795 27.035 17.795 26.6103C17.795 26.1857 17.9608 25.779 18.2559 25.48C18.5573 25.1798 18.9616 25.0117 19.3823 25.0092ZM19.975 26.0189C19.646 25.6879 19.1186 25.6879 18.7909 26.0189C18.6314 26.1728 18.541 26.3871 18.541 26.6103C18.541 26.8336 18.6314 27.0478 18.7909 27.2018C19.1186 27.5328 19.646 27.5328 19.975 27.2018C20.1345 27.0478 20.2249 26.8336 20.2249 26.6103C20.2249 26.3871 20.1345 26.1729 19.975 26.0189ZM16.7266 13.9177L18.1305 12.0343C18.2536 11.8778 18.4721 11.8406 18.6378 11.9483L21.5411 13.86C21.6503 13.9216 21.7169 14.0409 21.7144 14.1679V22.6342C22.3812 23.0486 22.9387 23.6233 23.3381 24.3072C23.8768 25.2309 24.0966 26.3125 23.9609 27.3787C23.8253 28.4448 23.3431 29.4327 22.5909 30.1846C21.678 31.0916 20.4561 31.5997 19.1827 31.5997C17.9106 31.5997 16.6875 31.0916 15.7757 30.1846C15.021 29.4353 14.5363 28.4474 14.3994 27.3799C14.2626 26.3138 14.4811 25.2309 15.021 24.3072C15.4204 23.6259 15.9741 23.0524 16.6347 22.6342V19.0288C16.6359 18.8967 16.705 18.7748 16.818 18.7107L17.4132 18.2578L16.8318 17.9499H16.8306C16.7062 17.8806 16.6284 17.7484 16.6284 17.6035V16.7977C16.6321 16.6464 16.7213 16.5116 16.8582 16.4526L17.3454 16.1832L16.7263 15.4429C16.6635 15.3788 16.6284 15.2915 16.6284 15.2004V14.1535C16.6296 14.0611 16.6648 13.9726 16.7263 13.9046L16.7266 13.9177ZM18.5235 12.7733L17.3833 14.2782V15.0762L18.2159 16.068V16.0693C18.2322 16.0872 18.2472 16.1052 18.2623 16.1244C18.3113 16.2129 18.3213 16.3194 18.2912 16.4169C18.2598 16.5132 18.1907 16.5927 18.1003 16.6363L17.3833 17.0302V17.4035L18.2937 17.9116C18.3427 17.9398 18.3854 17.9796 18.418 18.0258C18.477 18.1053 18.5021 18.208 18.4846 18.3068C18.4682 18.4056 18.4117 18.4928 18.3301 18.548L17.382 19.2395L17.3833 22.8448C17.3808 22.986 17.3092 23.1168 17.1937 23.1912C16.5608 23.5402 16.0321 24.0572 15.6642 24.6885C14.7324 26.2935 14.9924 28.3398 16.2933 29.6496C17.8906 31.2521 20.4486 31.2521 22.046 29.6496C23.3545 28.3448 23.6195 26.2946 22.6852 24.6885C22.316 24.0637 21.7924 23.5492 21.1657 23.1976C21.0389 23.1322 20.961 22.9975 20.9661 22.8525V14.3642L18.5235 12.7733ZM10.4794 5.65527V1.16085C10.4768 1.06206 10.4354 0.9684 10.3651 0.901687C10.2998 0.832405 10.2094 0.792634 10.1139 0.793918H1.13395C1.036 0.791352 0.943078 0.829843 0.876524 0.901687C0.807459 0.969684 0.768529 1.06334 0.771043 1.16085V30.8938C0.768531 30.9913 0.807459 31.085 0.876524 31.153C0.943078 31.2248 1.036 31.2633 1.13395 31.2595H10.1175C10.2117 31.262 10.3033 31.2223 10.3674 31.153C10.4389 31.085 10.4804 30.9926 10.4829 30.8938V9.47178H9.75582C9.14049 10.7932 7.93751 11.7298 6.52728 11.9864C5.11708 12.2417 3.67172 11.7863 2.6497 10.7611C1.82467 9.94004 1.36005 8.81358 1.36005 7.63581C1.36005 6.45933 1.82467 5.33287 2.6497 4.51048C4.13274 3.02608 6.4257 2.79127 8.16872 3.94339C8.81793 4.36935 9.34283 4.96721 9.68818 5.67284L10.4794 5.65527ZM7.77196 5.65527H8.82551C8.22025 4.71996 7.237 4.11056 6.14576 3.9938C5.05453 3.87705 3.96956 4.26451 3.18723 5.051C2.50536 5.73353 2.1211 6.66756 2.1211 7.64389C2.1211 8.61897 2.50536 9.55425 3.18723 10.2368C4.43794 11.4813 6.37307 11.6558 7.81706 10.6512C8.26284 10.3433 8.63832 9.9404 8.91585 9.46954H7.90122C7.65509 9.75693 7.35623 9.9917 7.02094 10.1611C6.62913 10.3599 6.19716 10.4613 5.7589 10.4574C5.01675 10.4587 4.30351 10.1624 3.77231 9.63122C3.24741 9.10518 2.94979 8.38415 2.94979 7.63106C2.94979 6.87922 3.2474 6.15819 3.77231 5.63091C4.30473 5.10231 5.01675 4.80596 5.7589 4.80468C6.16576 4.80211 6.5676 4.89064 6.93681 5.06384C7.24823 5.20882 7.53079 5.40897 7.77315 5.6553L7.77196 5.65527ZM6.75733 9.45798C6.33414 9.41051 5.93607 9.2232 5.62716 8.92298C5.26802 8.56761 5.06584 8.07878 5.06584 7.56687C5.07212 6.67778 5.67863 5.91053 6.52754 5.71425C5.76655 5.39864 4.89633 5.57185 4.30739 6.1569C3.92189 6.54308 3.70589 7.07168 3.70589 7.62333C3.70589 8.17374 3.92188 8.70233 4.30739 9.08848C4.69416 9.48107 5.21529 9.70175 5.75903 9.70432C6.0805 9.70175 6.39696 9.62733 6.68702 9.48621L6.74479 9.45542L6.75733 9.45798ZM18.1808 6.4122H6.96436C6.66172 6.4122 6.37163 6.53665 6.16193 6.75861C5.9472 6.97286 5.82538 7.26667 5.82288 7.57459C5.82288 7.87994 5.94468 8.17246 6.16193 8.38286C6.37164 8.60481 6.66172 8.73055 6.96436 8.72927H18.1683C18.4697 8.7267 18.7585 8.60225 18.9694 8.38286C19.1892 8.17373 19.3123 7.88123 19.3085 7.57459C19.3098 7.26667 19.1867 6.9716 18.9694 6.75861C18.7585 6.53922 18.4697 6.41476 18.1683 6.4122H18.1808ZM5.63957 16.7838L5.64083 16.7851C6.14062 16.7838 6.62157 16.9852 6.97693 17.3444C7.33106 17.6985 7.53198 18.1835 7.53198 18.689C7.53324 18.9828 7.46919 19.2728 7.34236 19.5371C7.24065 19.7436 7.1 19.9296 6.93049 20.0823V22.4199C6.92798 22.7651 6.79487 23.0973 6.55752 23.3437C6.31265 23.5887 5.98363 23.726 5.64082 23.7273C4.92754 23.7324 4.3449 23.1487 4.33735 22.4199V20.0862C3.96187 19.7282 3.7459 19.2279 3.73835 18.7031C3.7396 18.1976 3.93801 17.714 4.29089 17.3586C4.65129 16.9955 5.13852 16.794 5.64458 16.7979L5.63957 16.7838ZM6.45203 17.8794L6.45328 17.8807C6.23729 17.6613 5.94472 17.5369 5.64083 17.5343C5.33568 17.533 5.04183 17.6575 4.82837 17.8807C4.59481 18.1117 4.47048 18.435 4.48932 18.7673C4.5069 19.0983 4.66512 19.4062 4.92382 19.6089C5.02177 19.6794 5.08204 19.7936 5.08581 19.9168V22.4263C5.09335 22.7329 5.34073 22.9767 5.64086 22.9729C5.78402 22.9754 5.92341 22.9164 6.02261 22.8112C6.12433 22.7099 6.18335 22.5713 6.18586 22.4263V19.913C6.1846 19.7975 6.23734 19.6872 6.32776 19.6166C6.46966 19.5101 6.58519 19.3715 6.66556 19.2112C6.74844 19.0521 6.79113 18.8738 6.79113 18.6929C6.78737 18.3888 6.66556 18.0975 6.45333 17.8846L6.45203 17.8794Z" fill="black" />
                    </svg>
                </div>
                <span><h3>{lock.value}</h3><p>{lock.description}</p></span>
            </div>
        </div>
    );
}