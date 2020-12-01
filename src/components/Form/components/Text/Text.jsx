function Text({inputSize, initial}) {
    const newInitial = initial + '123';

    return (
        <div>
            Text with size {inputSize} with initial: {initial}
        </div>
    );
}

export default Text;
