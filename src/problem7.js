function problem7(user, friends, visitors) {
  var answer;
  let friendsDictionary = {};
  for (const friend of friends) {
    if (friend[0] in friendsDictionary) {
      friendsDictionary[friend[0]].push(friend[1])
    } else {
      friendsDictionary[friend[0]] = [friend[1]]
    }

    if (friend[1] in friendsDictionary) {
      friendsDictionary[friend[1]].push(friend[0])
    } else {
      friendsDictionary[friend[1]] = [friend[0]]
    }
  }
  
  let scoresDictionary = {};
  for (const otherUser of Object.keys(friendsDictionary)) {
    let score = 0;
    for (const otherUserFriend of friendsDictionary[otherUser]) {
      if (friendsDictionary[user].includes(otherUserFriend)) {
        score += 10
      }
    }
    scoresDictionary[otherUser] = score;
  }

  return answer;
}

module.exports = problem7;
