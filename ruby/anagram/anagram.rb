#TODO undefinedmethod match
class Anagram
    def initialize(str)
        @anstr = str.downcase.chars.sort.join
    end
    def self.match(arr)
        r = []
        for s in arr
            if @anstr == s.downcase.chars.sort.join
                r+=s
            end
        end
        r
    end
end
