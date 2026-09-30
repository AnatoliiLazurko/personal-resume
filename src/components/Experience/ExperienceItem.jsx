import { useState } from 'react';
import styles from './ExperienceStyles.module.css';
import { CircleChevronDown, X } from 'lucide-react';

const ExperienceItem = ({ position, company, period, details }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles['experience-item']}>
            <div
                className={styles['experience-item-container']}
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className={styles['experience-item-role']}>{position}</p>                           
                <CircleChevronDown
                    size={30}
                    className={`${styles['experience-chevron']} ${
                        isOpen ? styles['experience-chevron-open'] : ''
                    }`}
                />
            </div>
            
            <div className={`${styles['experience-item-details']} ${isOpen ? styles['experience-item-display'] : ''}`}>
                <div className={styles['experience-item-content']}>
                    <span className={styles['dividing-line']}></span>

                    <div className={styles['experience-item-info']}>
                        <p>{company}</p>
                        <p>{period}</p>
                    </div>

                    <div>
                        {details.map((detail, index) => {
                            if (detail.type === 'paragraph') {
                                return (
                                    <p
                                        key={index}
                                        className={styles['experience-item-description']}
                                    >
                                        {detail.text}
                                    </p>
                                );
                            }

                            if (detail.type === 'list') {
                                return (
                                    <ul
                                        key={index}
                                        className={styles['experience-item-list']}
                                    >
                                        {detail.items.map((item, i) => (
                                            <li
                                                key={i}
                                                className={styles['experience-list-item']}
                                            >
                                                <X size={15} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                );
                            }

                            if (detail.type === 'paragraph2') {
                                return (
                                    <p
                                        key={index}
                                        className={styles['experience-item-description']}
                                    >
                                        {detail.text}
                                    </p>
                                );
                            }

                            return null;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceItem;