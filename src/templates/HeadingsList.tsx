import React from 'react'
import { exampleData } from './exampleData'

interface HeadingsListProps {
    data: typeof exampleData
}

export const HeadingsList = ({ data }) => {
    
    const answer = (
        <ul>
            <li>A big section</li>
            <ul>
                <li>About us</li>
                <ul>
                    <li>The team</li>
                </ul>
                <li>Hello</li>
            </ul>
            <li>More stuff</li>
            <li>Conclusion</li>
        </ul>
    )
}

const ListNode = () => {
    return
}

// 1 ptr where you're adding elements
// 2 ptr which element you're adding rn

// (recursive) "silbings go here"

// ----

// (current) "children go here 'cause dfs"

// ptr1 = ul
// ptr2 = "A big section"

// ptr1 = under "A big section"
// ptr2 = "About Us"

// ptr1 = under "About Us"
// ptr = "The team"

// (pulled off recursive stack)
// ptr1 = under "A big section"
// ptr2 = "Hello"

// (pulled off recursive stack)
// ptr1 = ul
// ptr2 = "More stuff"

// (pulled off recursive stack)
// ptr1 = ul
// ptr2 = "Conclusion"

// The Stack

// There can only be 2 kinds of things:
// lists and objects
// 
// 
// (about us, a big section)
// (hello, a big section)
// (more stuff, root)
// (conclusion, root)

<ul>
  <li>a big section</li>
  <ul>
    <li>About Us</li>
    <ul>
        <li>The team</li>
    </ul>
  </ul>
  <li>hello</li>
  <li>conclusion</li>
</ul>



// if thing is a list:
//   break down the list into its objs and add to the stack in rev order
//   add the <ul>{next thing}</ul>
// else: (this is an obj)
//   add the <li>{obj.title}</li>
//   if there are children:
//     add the children list to the top of the stack
//   elif stuff still on stack:
//     pop the next thing off the stack
//   else:
//     there's nothing on the stack, so we're done

// What is {next thing}?

// {next thing} = {curr thing + {curr thing + {curr thing + siblings}}}

// React Classes
// UnorderedListNode extend Node <ul>
// ListItemNode extend Node <li>
// {Node + List[Node]}

// def fib(n):
//   if n == 1:
//     return 1
//   elif n == 2:
//     return 2:
//   else:
//     return fib(n - 1) + fib(n - 2)

// fib 500
// fib 499 + fib 498
// (fib 497 + fib 498) + fib 498
// ((fib 496 + fib 495) + fib 498) + fib 498


// def factorial(num):
//   def helper(n, x):
//     if n == 1:
//       return x
//     else:
//       return helper(n - 1, x * n)
//   return helper(num, 1)

// 5! = 5 * 4 * 3 * 2 * 1

// helper (5, 1)
// helper (4, 1 * 5)
// helper (3, 1 * 5 * 4)
// helper (2, 1 * 5 * 4 * 3)
// helper (1, 1 * 5 * 4 * 3 * 2)
// return 1 * 5 * 4 * 3 * 2