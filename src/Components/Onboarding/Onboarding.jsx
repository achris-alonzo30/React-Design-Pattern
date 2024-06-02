

export const Onboarding = ({ children, onFinish, currentIndex, onNext }) => {
    const goToNext = (stepData) => {
        onNext(stepData)
    }
    return (
        <>
            {children}
        </>
    )
} 