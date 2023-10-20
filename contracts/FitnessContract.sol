// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract FitnessContract {
    struct User {
        string name;
        uint256 totalWorkouts;
        uint256 totalHours;
    }
    
    struct Challenge {
        string title;
        string description;
        uint256 reward;
        bool isActive;
    }
    
    address public owner;
    mapping(address => User) public users;
    Challenge[] public challenges;
    
    constructor() {
        owner = msg.sender;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }
    
    function createUser(string memory _name) public {
        User storage user = users[msg.sender];
        user.name = _name;
        user.totalWorkouts = 0;
        user.totalHours = 0;
    }
    
    function createChallenge(string memory _title, string memory _description, uint256 _reward) public onlyOwner {
        challenges.push(Challenge({
            title: _title,
            description: _description,
            reward: _reward,
            isActive: true
        }));
    }
    
    function completeChallenge(uint256 _challengeIndex, uint256 _hours) public {
        require(challenges[_challengeIndex].isActive == true, "Challenge is not active");
        users[msg.sender].totalWorkouts += 1;
        users[msg.sender].totalHours += _hours;
    }
}
