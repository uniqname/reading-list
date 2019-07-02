/*
 * Given a dot (.) delimited string as a deep path into an object, an optional
 * fallback value, and the target object, extract the value from the object at
 * that path or return the fallback value if nothing exists at the provide path.
 *
 * EXAMPLE: select('a.0.b', 'fallback value')({a: [{b: 'Hi'}]}) // 'Hi'
 * EXAMPLE: select('some.deep.0.path', 'fallback value')({}) // 'fallback value'
 */

// select :: (String -> Any) -> Any -> Any
const select = (path = '', fallbackValue) => (targetObject) => {
  // store result in variable in order to explicitly check for undefined later
  const result = path

    // produce path segments array. dot (.) is the only valid delimeter
    .split('.')

    // walk the target object at each path segment sequentially.
    .reduce((targetObjectContext, pathSegment) =>
      // Use the object wrapper to  do the lookup in order to prevent errors when attempting to access properties on primities that don't allow property access like `null` or Numbers.
      Object(targetObjectContext)[pathSegment], targetObject)

  // if the result of the lookups is undefined, return the fallback value, otherwise return the found value.
  return result !== undefined ? result : fallbackValue
}

export default select
