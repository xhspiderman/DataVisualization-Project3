import urllib2
from bs4 import BeautifulSoup
import pdb

sources=[]
my_file = open('output_single.txt', 'r')
temp = my_file.readline()
while temp:
	sources.append(temp)
	temp = my_file.readline()
my_file.close()

# read the urls for characters

resultFile = open('real-e-p.txt', 'r+')
count=0
for source in sources:

    count+=1
    # name = source.split('     ')[0][1:-1] 
    # episode = source.split('     ')[1].split('   ')[0]
    imageURL = source.split('     ')[1].split('   ')[1][:-1]
    # pdb.set_trace()
    resultFile.write(imageURL[1:-1])
    resultFile.write('\n')

#     real = source.split('     ')
#     print real[0][1:-1]
#     print real[1][:-1][1:-1]
#     resultFile.write('"'+str(real[0][1:-1])+'"')
#     # pdb.set_trace()
#     # resultFile.write(str(int(real[1][:-1][1:-1])))
#     resultFile.write('\n')

# for source in sources:

#     real = source.split('     ')
#     print real[0][1:-1]
#     print real[1][:-1][1:-1]
#     # resultFile.write('"'+str(real[0][1:-1])+'"'+ '     ')
#     # pdb.set_trace()
#     resultFile.write(str(int(real[1][:-1][1:-1])))
#     resultFile.write('\n')

# seasonNUM = 0
# seasons = []
# seasonNUM = []
# season_file = open('episodescount.txt', 'r')
# temp = season_file.readline()
# while temp:
#     seasons.append(temp.split("\t")[1])
#     # resultFile.write(temp.split("\t")[1])
#     # resultFile.write('\n')
#     temp = season_file.readline()
# season_file.close()

# seasonCount = 0
# for season in seasons:
#     seasonCount +=1
#     for i in range(int(season)):
#         seasonNUM.append(seasonCount)
#         resultFile.write(str(seasonCount))
#         resultFile.write('\n')
# # pdb.set_trace()


resultFile.close()


# for url in tempurls:
# 	resultFile.write(url.encode('UTF-8'))
# 	resultFile.write('\n')

# resultFile.close()