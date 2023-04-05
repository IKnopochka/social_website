export const updateObjectInArray = (items: Array<any>, objPropName: any, actionItem: any, newObjProp: any) => {
    return items.map(m => m[objPropName] === actionItem ? {...m, ...newObjProp}: m);
}