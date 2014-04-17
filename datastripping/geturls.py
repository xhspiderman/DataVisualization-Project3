#This is the script for grabbing the content out of one specific website (tweak for the urls that are different)
import urllib2
from bs4 import BeautifulSoup
import pdb
import re

#opens the result file
resultFile = open("group_cats.txt", "r+")
page = urllib2.urlopen('http://simpsons.wikia.com/wiki/Category:Cats').read()
soup = BeautifulSoup(page)
#  get the urls
links = soup.body.find('table').find_all('a')
root = "http://simpsons.wikia.com"
sources = []
my_file = open('workingurl.txt', 'r')
temp = my_file.readline()
while temp:
	sources.append(temp)
	temp = my_file.readline()
my_file.close()
for i in links:
	#pdb.set_trace()
	resultFile.write(root + i['href'])
	resultFile.write('\n')

resultFile.close()