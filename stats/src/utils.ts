enum dateTypesIndex {
    day = 0,
    month = 1,
    year = 2
}

export const dateStringToDate = (dateString : string) : Date => {
    // 28/10/2010
    const dateParts = dateString.split("/").map((value: string) : number => {
        return parseInt(value)
    })

    return new Date(dateParts[dateTypesIndex.year], dateParts[dateTypesIndex.month] - 1, dateParts[dateTypesIndex.day])
}