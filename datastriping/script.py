# This is the script for grabbing the content out of a specific website
import urllib2
from bs4 import BeautifulSoup
import pdb

# opens the result file
resultFile = open("output.txt", "r+")

# get the 2940 urls for each characters
sources=[]
my_file = open('url2output.txt', 'r')
temp = my_file.readline()
while temp:
	sources.append(temp)
	temp = my_file.readline()
my_file.close()
# pdb.set_trace()
count=0
for source in sources:
	# opens target url or urls
	count+=1
	print count
	print source
	page = urllib2.urlopen(source[:-1]).read()
	soup = BeautifulSoup(page)
	#  get the character
	character=soup.find(id='WikiaPageHeader').find('h1').string
	#  get the episodes the character is in
	try:
		episodes=soup.find(id='Appearances').find_parent("h2").find_next_sibling().find_all(text="Episode")
	except AttributeError:
		episodes= ["none"]
	# out put the result as one to one data format into result file
	resultFile.write('"'+character.encode('UTF-8')+'"'+'   ')
	for episode in episodes:
		if episode!="none":
		    episode_name = episode.find_parent('i').find_next_sibling('a').string
		else:
			episode_name = episode
		resultFile.write('  "'+episode_name.encode('UTF-8')+'"')
	resultFile.write('\n')


resultFile.close()