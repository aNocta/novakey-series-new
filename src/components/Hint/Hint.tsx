import styles from "./hint.module.scss";
import { FloatingArrow, arrow, autoPlacement, offset, useFloating } from "@floating-ui/react";
import { useRef } from "react";

interface HintProps {
    text: string;
}

export const Hint = ({ text }: HintProps) => {
    const arrowRef = useRef(null);
    const { refs, floatingStyles, context } = useFloating({
        middleware: [
            arrow({
                element: arrowRef
            }),
            offset(5),
            autoPlacement()
        ]
    });
    return (<div className={styles.hintBox}>
        <span className={styles.hintSign} ref={refs.setReference}>?</span>
        <div className={styles.hint} ref={refs.setFloating} style={floatingStyles}>
            <p>{text}</p>
            <FloatingArrow ref={arrowRef} context={context} />
        </div>
    </div>)
}