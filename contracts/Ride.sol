// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
// import "hardhat/console.sol";

contract Ride {

    struct Rider {
        string name;
        uint rating;
        uint totalTrips;
        bool registered;
    }
    
    struct RideRequest {
        address rider;
        string pickup;
        string dropoff;
        uint fare;
        bool matched;
        bool approved;
    }
    
    struct Trip {
        address rider;
        address driver;
        uint startTime;
        uint endTime;
        uint distance;
        uint fare;
        uint riderRating;
        uint driverRating;
        bool ratedByRider;
        bool ratedByDriver;
    }

    mapping(address => Rider) public riders;
    Trip[] public trips;
    RideRequest[] public rideRequests;

    event RideRequested(address indexed rider, string pickup, string dropoff, uint price);
    event RideMatched(uint indexed requestId, address indexed rider, address indexed driver);

    function selectRide(string memory _pickup, string memory _dropoff, uint _price) public {
        require(riders[msg.sender].registered, "User not registered");
        
        RideRequest memory request = RideRequest(msg.sender, _pickup, _dropoff, _price, false, false);
        rideRequests.push(request);
        
        emit RideRequested(msg.sender, _pickup, _dropoff, _price);
    }
    
    function matchRide(uint _requestId) public {
        require(riders[msg.sender].registered, "User not registered");
        require(_requestId < rideRequests.length, "Invalid request ID");
        
        RideRequest storage request = rideRequests[_requestId];
        require(!request.matched, "Request already matched");
        
        request.matched = true;
        
        emit RideMatched(_requestId, request.rider, msg.sender);
    }
}