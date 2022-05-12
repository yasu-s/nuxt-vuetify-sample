/**
 * composablesで自動import
 */
export function useFoo() {
  return useState('foo', () => 'bar')
}

/**
 * composablesで自動import
 * ログ出力のみ
 */
export function hoge() {
  console.log('hoge')
}
