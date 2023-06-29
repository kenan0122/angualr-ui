function replaceStringByBuffer(str: string, buffer: any) {
    if (!buffer.length) {
        return str;
    }
    const slicedString: string[] = [];
    let offset = 0;
    buffer.forEach((buf: any, index: number) => {
        slicedString.push(str.slice(offset, buf.begin));
        slicedString.push(buf.replacedText);
        offset = buf.begin + buf.length;
        if (index === buffer.length - 1) {
            slicedString.push(str.slice(offset));
        }
    });
    // console.log(slicedString, slicedString.join(''));
    return slicedString.join("");
}

export function replaceLookbehind(
    str: string,
    regex: any,
    replacer: any,
    continuousMatch = false,
    rollbackLength = 1
) {
    if (!regex) {
        return str;
    }
    // 从头开始匹配
    regex.lastIndex = 0;
    let args;
    let lastIndex = 0;
    const replaceBuffer:any = [];
    while ((args = regex.exec(str)) !== null) {
        const replaceInfo = {
            begin: args.index,
            length: args[0].length,
        };
        if (continuousMatch && args.index === lastIndex - rollbackLength) {
            const [match, , ...restArgs] = args;
            // 丢弃 leadingChar，需要调整begin和length
            replaceBuffer.push({
                begin: replaceInfo.begin + rollbackLength,
                length: replaceInfo.length - rollbackLength,
                replacedText: replacer(match.slice(rollbackLength), "", ...restArgs),
            });
        } else {
            replaceBuffer.push({
                ...replaceInfo,
                replacedText: replacer(...args),
            });
        }
        // console.log(args);
        lastIndex = regex.lastIndex;
        regex.lastIndex -= rollbackLength;
    }
    // 正则复位，避免影响其他逻辑
    regex.lastIndex = 0;
    return replaceStringByBuffer(str, replaceBuffer);
}
