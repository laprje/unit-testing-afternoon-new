import { wordCount, attachUserName } from '../../server/utils'
import { shortenText } from '../../src/utils/functions'
import { shortText, longText, posts, users} from './__data__/testdata'

test('shortenText wont shorten string under 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29)
}) 

test('shortenText will shorten a string of more than 100 characters and add three periods on the end', () => {
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})

test('wordCount should correctly count the number of words in a sentence', () => {
    expect(wordCount(posts)).toBe(233)
})

test('attachUsername should correctly attach a users full name to the post', () => {
    let newPosts = attachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty('displayName')
})

test('attachuserName removes posts with no matching user', () => {
    let newPost = attachUserName(users, posts);
    let deletedPost = posts[5];
    expect(newPost).not.toContainEqual(deletedPost);
})