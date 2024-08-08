
# Leetcode 787 Problem: Cheapest Flights Within K Stops

# There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.

# You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.

from typing import List
def findCheapestPrice(n: int, flights: List[List[int]], src: int, dst: int, k: int):
        prices=[float('inf')]*n
        prices[src]=0
        for i in range(k+1):
            tmpPrice=prices.copy()
            for s,d,p in flights:
                if prices[s] == float("inf"):
                    continue
                if prices[s]+p < tmpPrice[d]:
                    tmpPrice[d]=prices[s]+p
            prices=tmpPrice
        if prices[dst]==float("inf"):
            return -1
        else:
            return prices[dst]
solution=findCheapestPrice( n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1)
print (solution)